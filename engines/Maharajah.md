# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2565<sub>(-47) | 2877<sub>(+3) | 2986<sub>(-37) |  |
| 1.4.1 | 2026-11-17 | 2612<sub>(+55) | 2874<sub>(+9) | 3023<sub>(+72) |  |
| 1.4.0 | 2026-11-15 | 2557<sub>(+159) | 2865<sub>(+141) | 2951<sub>(+51) |  |
| 1.3.2 | 2026-11-11 | 2398 | 2724 | 2900 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2637<sub>(+9) | 2904<sub>(+12) | 2827<sub>(-136) |  |
| 1.4.1 | 2026-11-17 | 2628<sub>(+43) | 2892<sub>(+12) | 2963<sub>(+2) |  |
| 1.4.0 | 2026-11-15 | 2585<sub>(+235) | 2880<sub>(+61) | 2961<sub>(+218) |  |
| 1.3.2 | 2026-11-11 | 2350 | 2819 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2350 | 2819 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maharajah+<version>&body=###%20Engine%20name%0AMaharajah%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-28 05:40:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2398, 2557, 2612, 2565]
  line "E1: LTC (60.0+0.60s)" [2724, 2865, 2874, 2877]
  line "E1: VLTC (2m24s+1.12s)" [2900, 2951, 3023, 2986]
  line "P1: STC (8.0+0.08s)" [2350, 2585, 2628, 2637]
  line "P1: LTC (60.0+0.60s)" [2819, 2880, 2892, 2904]
  line "P1: VLTC (2m24s+1.12s)" [2743, 2961, 2963, 2827]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2827 | 93 | 38 | 53% | 2801 | 26% |
|  |  | E1 | 2986 | 35 | 262 | 55% | 2944 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2904 | 61 | 84 | 51% | 2896 | 35% |
|  |  | E1 | 2877 | 37 | 248 | 51% | 2863 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2637 | 58 | 100 | 52% | 2623 | 25% |
|  |  | E1 | 2565 | 42 | 188 | 52% | 2542 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3023 | 40 | 200 | 51% | 3012 | 36% |
|  |  | P1 | 2963 | 40 | 198 | 52% | 2947 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2892 | 49 | 138 | 50% | 2889 | 28% |
|  |  | E1 | 2874 | 37 | 240 | 51% | 2869 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2628 | 41 | 192 | 49% | 2633 | 30% |
|  |  | E1 | 2612 | 40 | 224 | 53% | 2585 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2961 | 41 | 178 | 44% | 3016 | 41% |
|  |  | E1 | 2951 | 47 | 148 | 48% | 2977 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2880 | 45 | 160 | 54% | 2844 | 34% |
|  |  | E1 | 2865 | 41 | 198 | 48% | 2884 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2585 | 47 | 152 | 54% | 2542 | 25% |
|  |  | E1 | 2557 | 43 | 184 | 48% | 2574 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2900 | 74 | 64 | 56% | 2807 | 25% |
|  |  | P1 | 2743 | 98 | 40 | 45% | 2658 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2819 | 122 | 36 | 75% | 2388 | 17% |
|  |  | E1 | 2724 | 77 | 62 | 47% | 2755 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2350 | 82 | 56 | 58% | 2244 | 20% |
|  |  | E1 | 2398 | 69 | 86 | 45% | 2471 | 10% |