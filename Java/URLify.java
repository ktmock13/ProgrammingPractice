public class URLify MakeURL

  public static char[] MakeURL(char[] s, int len){
    int offset = 0;
    for(int i = 0; i < len; i++){
      if(s[i+offset] == ' ') { // iterate through the string, accomodate for changes in the loop
        s[i+offset] = '%';
        // could make this a seperate Fn, but for LOC sake brute it
        for(int j = len + offset - 1; j > (i + offset); j--) {  // shift the string to the right by one, replace the last char with a 2
          s[j + 1] = s[j];  // shifting one right
          if(j - 1 == i + offset) {  // if the loop is at the last character
            s[j] = '2';  // fill last char with replacement
          }
        }
        offset++;
        for(int j = len + offset - 1; j > (i + offset); j--) {  // shift the string to the right by one, replace the last char with a 2
          s[j + 1] = s[j];  // shifting one right
          if(j- 1 == i + offset) {  // if the loop is at the last character
            s[j] = '0';  // fill last char with replacement
          }
        }
        offset++;
      }
    }
    return s;
  }

  public static void main(String[] args) {
    // TESTS
    System.out.println(MakeURL("Mr John Smith    ".toCharArray(), 13));
    System.out.println(MakeURL("Mr Jo hn Simth      ".toCharArray(), 14));
    System.out.println(MakeURL("SUPER   TEST   O H  OH O H OH OH yeaaa. . . ...   ...                                        ".toCharArray(), 53));
  }
}

// SOLVED
