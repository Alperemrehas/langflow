from typing import Optional, Union

from langflow import CustomComponent
from langflow.field_typing import Text
from langflow.schema import Record


class ChatInput(CustomComponent):
    display_name = "Chat Input"
    description = "Used to get user input from the chat."

    def build_config(self):
        return {
            "message": {"input_types": ["Text"], "display_name": "Message","multiline": True},
            "sender_type": {
                "options": ["Machine", "User"],
                "display_name": "Sender Type",
            },
            "sender_name": {"display_name": "Sender Name"},
            "as_record": {
                "display_name": "As Record",
                "info": "If true, the message will be returned as a Record.",
            },
        }

    def build(
        self,
        sender_type: Optional[str] = "User",
        sender_name: Optional[str] = "You",
        message: Optional[str] = None,
        as_record: Optional[bool] = False,
    ) -> Union[Text, Record]:
        self.status = message
        if as_record:
            if isinstance(message, Record):
                # Update the data of the record
                message.data["sender"] = sender_type
                message.data["sender_name"] = sender_name
                return message
            return Record(
                text=message, data={"sender": sender_type, "sender_name": sender_name}
            )
        if not message:
            message = ""
        return message