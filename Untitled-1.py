def insertion_sort(arr):
    for i in range(1, len(arr)):
        key_item = arr[i]
        j = i-1
        while j >= 0 and arr[j] > key_item:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key_item
    return arr

# Example usage
arr = [12, 11, 13, 5, 6]
print(insertion_sort(arr))
# Output: [5, 6, 11, 12, 13]