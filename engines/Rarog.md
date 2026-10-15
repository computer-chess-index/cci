# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2785<sub>(+341) | 3073<sub>(+258) | 3189<sub>(+231) |  |
| 2.4.0 | 2026-09-11 | 2444 | 2815 | 2958 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2940<sub>(+289) | 3316<sub>(+289) | 3366<sub>(+276) |  |
| 2.4.0 | 2026-09-11 | 2651 | 3027 | 3090 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-15 04:42:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0"]
  y-axis "Elo Rating" 2400 --> 3400
  line "E1: STC (8.0+0.08s)" [2444, 2785]
  line "E1: LTC (60.0+0.60s)" [2815, 3073]
  line "E1: VLTC (2m24s+1.12s)" [2958, 3189]
  line "P1: STC (8.0+0.08s)" [2651, 2940]
  line "P1: LTC (60.0+0.60s)" [3027, 3316]
  line "P1: VLTC (2m24s+1.12s)" [3090, 3366]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3366 | 53 | 94 | 52% | 3351 | 61% |
|  |  | E1 | 3189 | 34 | 244 | 55% | 3155 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3316 | 49 | 116 | 51% | 3306 | 53% |
|  |  | E1 | 3073 | 40 | 180 | 54% | 3036 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2940 | 55 | 102 | 51% | 2927 | 37% |
|  |  | E1 | 2785 | 38 | 218 | 57% | 2719 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3090 | 39 | 198 | 51% | 3082 | 42% |
|  |  | E1 | 2958 | 29 | 367 | 52% | 2947 | 41% |
|  |  | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3027 | 42 | 168 | 53% | 2993 | 43% |
|  |  | E1 | 2815 | 32 | 310 | 47% | 2847 | 38% |
|  |  | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2444 | 36 | 252 | 41% | 2538 | 33% |
|  |  | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2651 | 46 | 156 | 46% | 2688 | 31% |