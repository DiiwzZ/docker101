############################ q1 ###########################
from azure.storage.queue import (
 QueueClient,
 BinaryBase64EncodePolicy,
 BinaryBase64DecodePolicy
)
import os, uuid, base64
connect_str = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
q_name = "queue-1650703554"
queue_client = QueueClient.from_connection_string(connect_str, q_name)
messages = queue_client.peek_messages(max_messages=57)
for msg in messages:
 print(msg.content)

############################ q2 ###########################
from azure.storage.queue import (
 QueueClient,
 BinaryBase64EncodePolicy,
 BinaryBase64DecodePolicy
)
import os, uuid, base64
connect_str = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
q_name = "queue-16507033554" + str(uuid.uuid4())
print("Creating queue: " + q_name)
queue_client = QueueClient.from_connection_string(connect_str, q_name)
queue_client.create_queue()

############################ q3 ###########################
from azure.storage.queue import (
 QueueClient,
 BinaryBase64EncodePolicy,
 BinaryBase64DecodePolicy
)
import os, uuid, base64
connect_str = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
q_name = "queue-1650703554"
queue_client = QueueClient.from_connection_string(connect_str, q_name)
message = u"UwU"
for x in range(27):
  print("Adding message: " + message)
  queue_client.send_message(message)


############################ q4 ###########################
from azure.storage.queue import (
 QueueClient,
 BinaryBase64EncodePolicy,
 BinaryBase64DecodePolicy
)
import os, uuid, base64
connect_str = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
q_name = "queue-1650703554"
queue_client = QueueClient.from_connection_string(connect_str, q_name)
messages = queue_client.peek_messages(max_messages=10)
for peeked_message in messages:
 print("Peeked message: " + peeked_message.content)
properties = queue_client.get_queue_properties()
count = properties.approximate_message_count
print("Message count: " + str(count))
messages = queue_client.receive_messages()
delete_count = 0
for message in messages:
    if delete_count >= 9:
        break  
    print("Dequeueing message: " + message.content)
    queue_client.delete_message(message.id, message.pop_receipt)
    delete_count += 1
properties = queue_client.get_queue_properties()
count = properties.approximate_message_count
print("Message count: " + str(count))
messages = queue_client.receive_messages()


############################ count ###########################
from azure.storage.queue import (
 QueueClient,
 BinaryBase64EncodePolicy,
 BinaryBase64DecodePolicy
)
import os, uuid, base64
connect_str = os.getenv("AZURE_STORAGE_CONNECTION_STRING")
q_name = "queue-1650703554"
queue_client = QueueClient.from_connection_string(connect_str, q_name)
messages = queue_client.peek_messages(max_messages=32)
properties = queue_client.get_queue_properties()
count = properties.approximate_message_count
print("Message count: " + str(count))
messages = queue_client.receive_messages()

