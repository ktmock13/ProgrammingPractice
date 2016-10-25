public class URLify {

  public static void MakeURL(char[] s, int len){

    int offset = 0;
    for(int i = 0; i < len; i++){
      if(s[i + offset] == ' ') { // iterate through the string, accomodate for changes in the loop
        s[i] = "%";
      }
    }
    System.out.println(s);
  }


  public static void main(String[] args) {
    char[] str = "Mr John Smith    ";
    MakeURL(str, 13);
  }
}
