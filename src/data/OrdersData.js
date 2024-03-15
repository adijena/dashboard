let ordersData = [
    {
        "order_id": "c220d213-bb48-4cfb-b4d6-27dd9f59d39d",
        "customer_name": "Customer 1",
        "order_date": "2023-10-01",
        "status": "pending",
        "product_id": "3f7e6dc9-79ed-4e40-b35a-d2dd3bf1b6d5",
        "product_name": "Handbag"
    },
    {
        "order_id": "66f1eb6b-4b8d-4a7f-ba59-d9a409cfd45f",
        "customer_name": "Customer 2",
        "order_date": "2023-10-05",
        "status": "delivered",
        "product_id": "20558af0-64c6-4993-bc4a-470c9380846b",
        "product_name": "Sofa"
    },
    {
        "order_id": "74b45846-0df8-4898-8ad4-279fa61e3a5f",
        "customer_name": "Customer 3",
        "order_date": "2023-10-09",
        "status": "pending",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "ba0d5102-5e4e-4489-b889-901e3fc86121",
        "customer_name": "Customer 4",
        "order_date": "2023-10-13",
        "status": "delivered",
        "product_id": "eb59e0bf-b0db-4b56-8902-51f63a2719b7",
        "product_name": "Blender"
    },
    {
        "order_id": "9e57b660-d7c4-4d86-aedf-5d02f6c18b63",
        "customer_name": "Customer 5",
        "order_date": "2023-10-17",
        "status": "pending",
        "product_id": "5c3f38cc-f6bc-4511-abe5-6d96fb7a9538",
        "product_name": "T-shirt"
    },
    {
        "order_id": "105154ab-3666-4e2a-a343-fc0cb04f014b",
        "customer_name": "Customer 6",
        "order_date": "2023-10-21",
        "status": "delivered",
        "product_id": "04fc4b15-dc02-45c2-b90b-3584859ed7e4",
        "product_name": "Coffee Maker"
    },
    {
        "order_id": "ee515fea-5038-4e4c-af0a-aeedd529be93",
        "customer_name": "Customer 7",
        "order_date": "2023-10-25",
        "status": "pending",
        "product_id": "e2dd45ad-95e6-4d9e-a795-ae2e38d81e04",
        "product_name": "Wireless Earbuds"
    },
    {
        "order_id": "d68d4ebf-0307-4e53-b04c-4bfb05ad4c3a",
        "customer_name": "Customer 8",
        "order_date": "2023-10-29",
        "status": "delivered",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "7ec751f4-1978-4cd4-b35d-0bc14c17b276",
        "customer_name": "Customer 9",
        "order_date": "2023-11-02",
        "status": "pending",
        "product_id": "9a6efc0e-5c59-42b3-9dd0-7552de0b1270",
        "product_name": "Cookware Set"
    },
    {
        "order_id": "8b07d012-426e-4de4-b46b-fb560e25a11b",
        "customer_name": "Customer 10",
        "order_date": "2023-11-06",
        "status": "delivered",
        "product_id": "4d0781d4-93eb-4c88-a7d8-964dcb876490",
        "product_name": "Watch"
    },
    {
        "order_id": "33442b38-42c8-4673-b1ef-9a0bae43b725",
        "customer_name": "Customer 11",
        "order_date": "2023-11-10",
        "status": "pending",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "db863dab-6b49-40fc-ba59-155416a07a08",
        "customer_name": "Customer 12",
        "order_date": "2023-11-14",
        "status": "delivered",
        "product_id": "04fc4b15-dc02-45c2-b90b-3584859ed7e4",
        "product_name": "Coffee Maker"
    },
    {
        "order_id": "a7de7151-0049-47f8-8271-93565f87b71e",
        "customer_name": "Customer 13",
        "order_date": "2023-11-18",
        "status": "pending",
        "product_id": "5c3f38cc-f6bc-4511-abe5-6d96fb7a9538",
        "product_name": "T-shirt"
    },
    {
        "order_id": "f96128a6-8d91-4f80-b42d-cab368bb1d58",
        "customer_name": "Customer 14",
        "order_date": "2023-11-22",
        "status": "delivered",
        "product_id": "9a6efc0e-5c59-42b3-9dd0-7552de0b1270",
        "product_name": "Cookware Set"
    },
    {
        "order_id": "7e8740ac-28b5-4ee3-bb29-3dd6d010e319",
        "customer_name": "Customer 15",
        "order_date": "2023-11-26",
        "status": "pending",
        "product_id": "14e39e11-0f7c-4b64-bd8d-82a1b6e16d39",
        "product_name": "Laptop"
    },
    {
        "order_id": "f08d9ed1-e1d7-4c4f-bf99-5f8b234e3805",
        "customer_name": "Customer 16",
        "order_date": "2023-11-30",
        "status": "delivered",
        "product_id": "3f7e6dc9-79ed-4e40-b35a-d2dd3bf1b6d5",
        "product_name": "Handbag"
    },
    {
        "order_id": "c589fe35-11d7-4ef7-87f3-e1a6ed4f8f24",
        "customer_name": "Customer 17",
        "order_date": "2023-12-04",
        "status": "pending",
        "product_id": "e2dd45ad-95e6-4d9e-a795-ae2e38d81e04",
        "product_name": "Wireless Earbuds"
    },
    {
        "order_id": "85ab3a92-5ab2-4fe5-aa92-09e4287d1ec2",
        "customer_name": "Customer 18",
        "order_date": "2023-12-08",
        "status": "delivered",
        "product_id": "5c3f38cc-f6bc-4511-abe5-6d96fb7a9538",
        "product_name": "T-shirt"
    },
    {
        "order_id": "63ee65f7-9f8c-4634-9ef1-5abf79a4e9a5",
        "customer_name": "Customer 19",
        "order_date": "2023-12-12",
        "status": "pending",
        "product_id": "04fc4b15-dc02-45c2-b90b-3584859ed7e4",
        "product_name": "Coffee Maker"
    },
    {
        "order_id": "889222f6-2e61-498f-bbb5-6351fb8cb6f0",
        "customer_name": "Customer 20",
        "order_date": "2023-12-16",
        "status": "delivered",
        "product_id": "4d0781d4-93eb-4c88-a7d8-964dcb876490",
        "product_name": "Watch"
    },
    {
        "order_id": "6ae93b4f-081e-46c2-8f79-94e646d3d73c",
        "customer_name": "Customer 21",
        "order_date": "2023-12-20",
        "status": "pending",
        "product_id": "9a6efc0e-5c59-42b3-9dd0-7552de0b1270",
        "product_name": "Cookware Set"
    },
    {
        "order_id": "1a09be33-59e8-46e9-b45f-e5f50de1e1ee",
        "customer_name": "Customer 22",
        "order_date": "2023-12-24",
        "status": "delivered",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "36544f47-5a79-4347-bba4-5b635e51dd14",
        "customer_name": "Customer 23",
        "order_date": "2023-12-28",
        "status": "pending",
        "product_id": "04fc4b15-dc02-45c2-b90b-3584859ed7e4",
        "product_name": "Coffee Maker"
    },
    {
        "order_id": "2bb75820-168d-40f1-9a13-0ac4f7466ed8",
        "customer_name": "Customer 24",
        "order_date": "2024-01-01",
        "status": "delivered",
        "product_id": "20558af0-64c6-4993-bc4a-470c9380846b",
        "product_name": "Sofa"
    },
    {
        "order_id": "aceb2fc3-45b4-4818-bd9e-16e59a3b6885",
        "customer_name": "Customer 25",
        "order_date": "2024-01-05",
        "status": "pending",
        "product_id": "9a6efc0e-5c59-42b3-9dd0-7552de0b1270",
        "product_name": "Cookware Set"
    },
    {
        "order_id": "e56e6eb8-4848-470a-8533-0ed3a72b189a",
        "customer_name": "Customer 26",
        "order_date": "2024-01-09",
        "status": "delivered",
        "product_id": "14e39e11-0f7c-4b64-bd8d-82a1b6e16d39",
        "product_name": "Laptop"
    },
    {
        "order_id": "7f3be6fc-0eb7-4e8d-92e5-d11d5b871243",
        "customer_name": "Customer 27",
        "order_date": "2024-01-13",
        "status": "pending",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "aab93410-6e7a-46c5-aad1-1fd0a5c9b081",
        "customer_name": "Customer 28",
        "order_date": "2024-01-17",
        "status": "delivered",
        "product_id": "4d0781d4-93eb-4c88-a7d8-964dcb876490",
        "product_name": "Watch"
    },
    {
        "order_id": "fd5b4e6c-e4e7-45a9-b76e-23fe64db4fa7",
        "customer_name": "Customer 29",
        "order_date": "2024-01-21",
        "status": "pending",
        "product_id": "160a43a0-7811-47e8-9297-5b3c3d0d6821",
        "product_name": "Smartphone"
    },
    {
        "order_id": "d1ed413f-d0f5-4580-bf50-0c1c177663c2",
        "customer_name": "Customer 30",
        "order_date": "2024-01-25",
        "status": "delivered",
        "product_id": "20558af0-64c6-4993-bc4a-470c9380846b",
        "product_name": "Sofa"
    },
    {
        "order_id": "0b4a82ed-b890-4af2-b9ef-f726260ca757",
        "customer_name": "Customer 31",
        "order_date": "2024-01-29",
        "status": "pending",
        "product_id": "5c3f38cc-f6bc-4511-abe5-6d96fb7a9538",
        "product_name": "T-shirt"
    },
    {
        "order_id": "a70ebab9-80c3-4eab-b8bb-89a9714a07e6",
        "customer_name": "Customer 32",
        "order_date": "2024-02-02",
        "status": "delivered",
        "product_id": "04fc4b15-dc02-45c2-b90b-3584859ed7e4",
        "product_name": "Coffee Maker"
    },
    {
        "order_id": "d29b33f5-c9b2-49b9-bbc1-97b5959be1b9",
        "customer_name": "Customer 33",
        "order_date": "2024-02-06",
        "status": "pending",
        "product_id": "3f7e6dc9-79ed-4e40-b35a-d2dd3bf1b6d5",
        "product_name": "Handbag"
    },
    {
        "order_id": "a74c2312-ec09-4434-8b1b-ebf097b742b5",
        "customer_name": "Customer 34",
        "order_date": "2024-02-10",
        "status": "delivered",
        "product_id": "20558af0-64c6-4993-bc4a-470c9380846b",
        "product_name": "Sofa"
    },
    {
        "order_id": "5d7be795-cb20-4ec3-93ab-44a8966a7b63",
        "customer_name": "Customer 35",
        "order_date": "2024-02-14",
        "status": "pending",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "db1ef1cf-9370-4475-b858-6d55032be33a",
        "customer_name": "Customer 36",
        "order_date": "2024-02-18",
        "status": "delivered",
        "product_id": "e2dd45ad-95e6-4d9e-a795-ae2e38d81e04",
        "product_name": "Wireless Earbuds"
    },
    {
        "order_id": "c98aaea4-b643-4ee4-8be3-8722a3672297",
        "customer_name": "Customer 37",
        "order_date": "2024-02-22",
        "status": "pending",
        "product_id": "5c3f38cc-f6bc-4511-abe5-6d96fb7a9538",
        "product_name": "T-shirt"
    },
    {
        "order_id": "f85dc273-7f2e-49ae-86ed-4f0b20f14ebd",
        "customer_name": "Customer 38",
        "order_date": "2024-02-26",
        "status": "delivered",
        "product_id": "9a6efc0e-5c59-42b3-9dd0-7552de0b1270",
        "product_name": "Cookware Set"
    },
    {
        "order_id": "222272fb-00cf-43c2-8c33-88386845e74d",
        "customer_name": "Customer 39",
        "order_date": "2024-03-01",
        "status": "pending",
        "product_id": "51e84660-ea75-4e20-9ec2-f665b09c6a4e",
        "product_name": "Shoes"
    },
    {
        "order_id": "31568c8f-470e-4b18-91e2-1b8d2c4ad59f",
        "customer_name": "Customer 40",
        "order_date": "2024-03-05",
        "status": "delivered",
        "product_id": "04fc4b15-dc02-45c2-b90b-3584859ed7e4",
        "product_name": "Coffee Maker"
    }
]

export const getAllOrders = () => {
    return ordersData;
};

export const updateOrderStatus = (orderId, newStatus) => {
    const orderIndex = ordersData.findIndex(order => order.order_id === orderId);
    if (orderIndex !== -1) {
        ordersData[orderIndex].status = newStatus;
        console.log("status updated");
    } else {
        console.log("id not found");
    }
};

export const deleteOrder = (orderId) => {
    ordersData = ordersData.filter(item => item.order_id !== orderId);
    console.log(`Deleted Order ID: ${orderId}`)
};

export const searchOrdersById = (orderId) => {

    const searchId = orderId.toLowerCase();
    const filteredOrders = ordersData.filter(order => order.order_id.toLowerCase().includes(searchId));
  
    return filteredOrders;
  }