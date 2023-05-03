/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CUSTOMERS_ARN
	STORAGE_CUSTOMERS_NAME
	STORAGE_CUSTOMERS_STREAMARN
Amplify Params - DO NOT EDIT */

package com.demo.project;

import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context; 
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;
public class LambdaRequestHandler {   

	static String getAlphaNumericString(int n){
		String AlphaNumericString = "ID_0123456789";
							
		StringBuilder sb = new StringBuilder(n);
		for (int i = 0; i < n; i++) {
		int index
			= (int)(AlphaNumericString.length()
			* Math.random());
		sb.append(AlphaNumericString
			.charAt(index));
		}
		
		return sb.toString();
	}   
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context){
       /* String greetingString = String.format("Hello %s!", "API");
        return new APIGatewayProxyResponseEvent().withBody(greetingString);*/
		Map<String , String>headers=new HashMap<>();
        headers.put("Access-Control-Allow-Headers", "Content-Type");
        headers.put("Access-Control-Allow-Origin", "*");    
        headers.put("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
		final String tablename=System.getenv("STORAGE_CUSTOMERS_NAME");
		DynamoDB dynamoDB=new DynamoDB(AmazonDynamoDBClientBuilder.standard().build());
		Table table=dynamoDB.getTable(tablename);
		Gson gson=new Gson();
		if(request.getHttpMethod().equals("GET") && request.getPath().equals("/customers")){
			AmazonDynamoDB amazonDynamoDB=AmazonDynamoDBClientBuilder.standard().build();
			ScanResult scanResult=amazonDynamoDB.scan(new ScanRequest().withTableName(tablename));
			List<ResponseClass>readCustomer=scanResult.getItems().stream().map(
				item->new ResponseClass(
					item.get("id").getS(),
					item.get("name").getS(),
					item.get("address").getS()
				)
				
			)
			.collect(Collectors.toList());
				
			return new APIGatewayProxyResponseEvent().withBody(gson.toJson(readCustomer)).withStatusCode(200).withHeaders(headers);
		}
		if(request.getHttpMethod().equals("GET") && request.getResource().equals("/customers/{proxy+}")){
			String findCustomer=request.getPathParameters().get("proxy");
			Item item=table.getItem("id",findCustomer);
			ResponseClass customerDetail=new ResponseClass(
				item.getString("id"),
				item.getString("name"),
				item.getString("address")
			);
			return new APIGatewayProxyResponseEvent().withBody(gson.toJson(customerDetail)).withStatusCode(200).withHeaders(headers);
		}
		if(request.getHttpMethod().equals("POST") && request.getPath().equals("/customers")){
			RequestClass createCustomer=gson.fromJson(request.getBody(),RequestClass.class);
			//DynamoDB dynamoDB=new DynamoDB(AmazonDynamoDBClientBuilder.standard().build());
			//Table table=dynamoDB.getTable(tablename);
			Item item=new Item().withPrimaryKey("id", getAlphaNumericString(20))
								.withString("name", createCustomer.getName())
								.withString("address", createCustomer.getAddress());
			table.putItem(item);
			return new APIGatewayProxyResponseEvent().withBody(gson.toJson(createCustomer.getName()+" Added successfully")).withStatusCode(200).withHeaders(headers);
		}
		if(request.getHttpMethod().equals("DELETE") && request.getPath().equals("/customers")){
			RequestClass deleteCustomer=gson.fromJson(request.getBody(),RequestClass.class);
			String customerName=deleteCustomer.getName();
			table.deleteItem("id", deleteCustomer.getId());
			return new APIGatewayProxyResponseEvent().withBody(gson.toJson(customerName+" deleted")).withStatusCode(200).withHeaders(headers);
		}
		if(request.getHttpMethod().equals("PUT") && request.getPath().equals("/customers")){
			RequestClass updateCustomer=gson.fromJson(request.getBody(),RequestClass.class);
			Map<String,String>expressionAttributeNames=new HashMap<>();
			expressionAttributeNames.put("#N", "name");
			expressionAttributeNames.put("#A", "address");
			Map<String,Object>expressionAttributeValues=new HashMap<>();
			expressionAttributeValues.put(":ValN",updateCustomer.getName());
			expressionAttributeValues.put(":ValA", updateCustomer.getAddress());
			table.updateItem("id", updateCustomer.getId(),
			 "SET #N=:ValN,#A=:ValA",expressionAttributeNames,expressionAttributeValues);
			return new APIGatewayProxyResponseEvent().withBody(gson.toJson(updateCustomer.getName()+" updated")).withStatusCode(200).withHeaders(headers);
		}
		return new APIGatewayProxyResponseEvent().withBody("Record not found!").withStatusCode(404).withHeaders(headers);
    }
}