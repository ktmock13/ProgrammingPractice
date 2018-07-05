public class IsPermutation {
  public static boolean permutation (String s, String t) {
    if(s.length() != t.length()) return false;
    int[] letters = new int[128]; //for ASCII possibilities, use as hashmap
    for (int i = 0; i < s.length(); i++) {
      letters[s.charAt(i)]++;
    }
    for (int i = 0; i < t.length(); i++) {
      letters[t.charAt(i)]--;
      if(letters[t.charAt(i)] < 0) {
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    System.out.println(permutation(new String("htings"), new String("things")));
  }
}
