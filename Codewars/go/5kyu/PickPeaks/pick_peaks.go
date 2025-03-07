// Codewars 1
// Title :	Pick peaks
// Question :	write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// Challange Url :	https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/go
// Level : 5kyu

package pickpeaks

type PosPeaks struct {
	Pos   []int
	Peaks []int
}

// method 1
func PickPeaks(array []int) PosPeaks {
	result := PosPeaks{Pos: []int{}, Peaks: []int{}}
	if len(array) < 3 {
		return result
	}

	for i := 1; i < len(array)-1; i++ {
		if array[i] > array[i-1] && array[i] > array[i+1] {
			result.Pos = append(result.Pos, i)
			result.Peaks = append(result.Peaks, array[i])
		} else if array[i] > array[i-1] && array[i] == array[i+1] {
			j := i + 1
			for j < len(array)-1 && array[j] == array[i] {
				j++
			}
			if array[j] < array[i] {
				result.Pos = append(result.Pos, i)
				result.Peaks = append(result.Peaks, array[i])
			}
		}
	}

	return result
}

// method 2

// other user method
// func PickPeaks(array []int) PosPeaks {
// 	posPeaks := PosPeaks{Pos: []int{}, Peaks: []int{}}
// 	candidate := 0
// 	for i := 1; i < len(array); i++ {
// 		if array[i-1] < array[i] {
// 			candidate = i
// 		} else if array[i-1] > array[i] && candidate > 0 {
// 			posPeaks.Pos = append(posPeaks.Pos, candidate)
// 			posPeaks.Peaks = append(posPeaks.Peaks, array[candidate])
// 			candidate = 0
// 		}
// 	}
// 	return posPeaks
// }
