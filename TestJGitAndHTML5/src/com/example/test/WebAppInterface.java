package com.example.test;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

public class WebAppInterface {
	Context mContext;

    /** Instantiate the interface and set the context */
    WebAppInterface(Context c) {
        mContext = c;
    }

    /** Show a toast from the web page */
    @JavascriptInterface
    public void showToast(String toast) {
        Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
    }
    
    /** Try...public void evaluateJavascript (String script, ValueCallback<String> resultCallback) within method */
    @JavascriptInterface	
    public String setVar(String x) {
    	return x;
    	//return message;
    }
    
}
