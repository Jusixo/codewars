def count_positives_sum_negatives(lst)
  positive = 0
  negative = 0
  lst.each { |num| num > 0 ? pos += 1 : negative += num }
  [positive, negative]
end
