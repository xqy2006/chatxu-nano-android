package com.xuqinyang.chatxunano;


import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.webkit.JavascriptInterface;

public class WebViewInterface {
    @JavascriptInterface
    public boolean writeToClipboard(String text) {
        //ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
        //ClipData clip = ClipData.newPlainText("demo", text);
        //clipboard.setPrimaryClip(clip);
        return true;
    }
}