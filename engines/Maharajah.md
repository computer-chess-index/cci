# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2595<sub>(+37) | 2880<sub>(+17) | 3025<sub>(+68) |  |
| 1.4.0 | 2026-11-15 | 2558<sub>(+162) | 2863<sub>(+135) | 2957<sub>(+54) |  |
| 1.3.2 | 2026-11-11 | 2396 | 2728 | 2903 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2616<sub>(+51) | 2898<sub>(+35) | 2958<sub>(+8) |  |
| 1.4.0 | 2026-11-15 | 2565<sub>(+219) | 2863<sub>(+50) | 2950<sub>(+219) |  |
| 1.3.2 | 2026-11-11 | 2346 | 2813 | 2731 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2346 | 2813 | 2731 |  |
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

Generated: 2026-11-24 05:40:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2396, 2558, 2595]
  line "E1: LTC (60.0+0.60s)" [2728, 2863, 2880]
  line "E1: VLTC (2m24s+1.12s)" [2903, 2957, 3025]
  line "P1: STC (8.0+0.08s)" [2346, 2565, 2616]
  line "P1: LTC (60.0+0.60s)" [2813, 2863, 2898]
  line "P1: VLTC (2m24s+1.12s)" [2731, 2950, 2958]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2958 | 43 | 176 | 53% | 2934 | 31% |
|  |  | E1 | 3025 | 40 | 200 | 51% | 3015 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2898 | 51 | 126 | 52% | 2877 | 30% |
|  |  | E1 | 2880 | 37 | 232 | 51% | 2871 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2616 | 42 | 188 | 49% | 2624 | 30% |
|  |  | E1 | 2595 | 42 | 200 | 51% | 2583 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2950 | 41 | 178 | 44% | 3005 | 41% |
|  |  | E1 | 2957 | 47 | 148 | 48% | 2982 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2863 | 46 | 152 | 53% | 2832 | 34% |
|  |  | E1 | 2863 | 41 | 194 | 47% | 2886 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2565 | 48 | 148 | 53% | 2531 | 25% |
|  |  | E1 | 2558 | 43 | 184 | 48% | 2576 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2731 | 97 | 40 | 45% | 2646 | 25% |
|  |  | E1 | 2903 | 74 | 64 | 56% | 2808 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2813 | 122 | 36 | 75% | 2381 | 17% |
|  |  | E1 | 2728 | 77 | 62 | 47% | 2759 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2346 | 82 | 56 | 58% | 2241 | 20% |
|  |  | E1 | 2396 | 69 | 86 | 45% | 2469 | 10% |