from sklearn import tree
features = [[140, 0], [130, 1], [150, 0], [170, 0]]
labels = ["apple", "apple", "orange", "orange"]
clf = tree.DecisionTreeClassifier()
clf = clf.fit(features, labels)
print clf.predict([[160,0]])
