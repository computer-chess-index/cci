# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2595<sub>(+42) | 2878<sub>(+12) | 3029<sub>(+81) |  |
| 1.4.0 | 2026-11-15 | 2553<sub>(+159) | 2866<sub>(+140) | 2948<sub>(+50) |  |
| 1.3.2 | 2026-11-11 | 2394 | 2726 | 2898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2614<sub>(+60) | 2882<sub>(+29) | 2928<sub>(-12) |  |
| 1.4.0 | 2026-11-15 | 2554<sub>(+213) | 2853<sub>(+49) | 2940<sub>(+217) |  |
| 1.3.2 | 2026-11-11 | 2341 | 2804 | 2723 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2341 | 2804 | 2723 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maharajah+<version>&body=###%20Engine%20name%0AMaharajah%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:40:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2394, 2553, 2595]
  line "E1: LTC (60.0+0.60s)" [2726, 2866, 2878]
  line "E1: VLTC (2m24s+1.12s)" [2898, 2948, 3029]
  line "P1: STC (8.0+0.08s)" [2341, 2554, 2614]
  line "P1: LTC (60.0+0.60s)" [2804, 2853, 2882]
  line "P1: VLTC (2m24s+1.12s)" [2723, 2940, 2928]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2928 | 57 | 100 | 53% | 2904 | 30% |
|  |  | E1 | 3029 | 41 | 188 | 52% | 3013 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2882 | 60 | 90 | 53% | 2858 | 30% |
|  |  | E1 | 2878 | 39 | 208 | 51% | 2870 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2614 | 56 | 108 | 49% | 2623 | 26% |
|  |  | E1 | 2595 | 44 | 180 | 52% | 2579 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2940 | 41 | 178 | 44% | 2996 | 41% |
|  |  | E1 | 2948 | 47 | 144 | 47% | 2981 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2853 | 46 | 152 | 53% | 2822 | 34% |
|  |  | E1 | 2866 | 42 | 190 | 48% | 2888 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2554 | 49 | 140 | 53% | 2519 | 25% |
|  |  | E1 | 2553 | 43 | 180 | 48% | 2573 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2723 | 97 | 40 | 45% | 2638 | 25% |
|  |  | E1 | 2898 | 74 | 64 | 56% | 2805 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2804 | 122 | 36 | 75% | 2376 | 17% |
|  |  | E1 | 2726 | 77 | 62 | 47% | 2755 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2341 | 81 | 56 | 58% | 2236 | 20% |
|  |  | E1 | 2394 | 69 | 86 | 45% | 2468 | 10% |