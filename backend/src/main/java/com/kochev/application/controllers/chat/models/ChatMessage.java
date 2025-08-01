package com.kochev.application.controllers.chat.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ChatMessage {
    private String sender;
    private String content;
    private String timestamp;
}