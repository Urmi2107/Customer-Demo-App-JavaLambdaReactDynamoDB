/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CUSTOMERS_ARN
	STORAGE_CUSTOMERS_NAME
	STORAGE_CUSTOMERS_STREAMARN
Amplify Params - DO NOT EDIT */

package com.demo.project;
        
     public class RequestClass {
        String id;
        String name;
        String address;

        
        public String getId() {
            return id;
        }


        public void setId(String id) {
            this.id = id;
        }


        public String getName() {
            return name;
        }


        public void setName(String name) {
            this.name = name;
        }


        public String getAddress() {
            return address;
        }


        public void setAddress(String address) {
            this.address = address;
        }


        public RequestClass(String name, String address) {
            this.name = name;
            this.address = address;
        }


        public RequestClass() {
        }
    }