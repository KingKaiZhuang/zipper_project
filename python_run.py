from pymongo import MongoClient

# MongoDB連線配置
conn_config = "mongodb://127.0.0.1:27017/"
db_name = "ZipperWatch"

# 建立連線
client = MongoClient(conn_config)
db = client[db_name]
zipper_collection = db["zipper-table"]

# 更新 ZipperNum
filter_criteria = {"ZipperNum": {"$exists": True}}  # 確保存在 ZipperNum 屬性
update_data = {"$set": {"ZipperNum": 100}}  # 將 ZipperNum 更新為新的值

# 更新操作
result = zipper_collection.update_many(filter_criteria, update_data)

# 打印更新的結果
print(f"Matched {result.matched_count} document(s) and modified {result.modified_count} document(s).")

# 關閉連線
client.close()
