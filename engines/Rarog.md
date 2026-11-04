# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3019<sub>(+104) | 3341<sub>(+140) | 3434<sub>(+118) |  |
| 2.5.0 | 2026-10-05 | 2915<sub>(+358) | 3201<sub>(+267) | 3316<sub>(+238) |  |
| 2.4.0 | 2026-09-11 | 2557 | 2934 | 3078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3231<sub>(+241) | 3413<sub>(+68) | 3537<sub>(+96) |  |
| 2.5.0 | 2026-10-05 | 2990<sub>(+293) | 3345<sub>(+267) | 3441<sub>(+300) |  |
| 2.4.0 | 2026-09-11 | 2697 | 3078 | 3141 |  |
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

Generated: 2026-11-04 05:41:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3600
  line "E1: STC (8.0+0.08s)" [2557, 2915, 3019]
  line "E1: LTC (60.0+0.60s)" [2934, 3201, 3341]
  line "E1: VLTC (2m24s+1.12s)" [3078, 3316, 3434]
  line "P1: STC (8.0+0.08s)" [2697, 2990, 3231]
  line "P1: LTC (60.0+0.60s)" [3078, 3345, 3413]
  line "P1: VLTC (2m24s+1.12s)" [3141, 3441, 3537]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3537 | 38 | 180 | 51% | 3532 | 61% |
|  |  | E1 | 3434 | 30 | 300 | 49% | 3445 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3413 | 39 | 178 | 52% | 3395 | 57% |
|  |  | E1 | 3341 | 31 | 280 | 50% | 3341 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3231 | 45 | 146 | 53% | 3205 | 44% |
|  |  | E1 | 3019 | 35 | 248 | 49% | 3023 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3441 | 36 | 206 | 53% | 3421 | 61% |
|  |  | E1 | 3316 | 30 | 312 | 54% | 3290 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3201 | 33 | 264 | 53% | 3174 | 55% |
|  |  | P1 | 3345 | 35 | 230 | 48% | 3357 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2915 | 32 | 312 | 56% | 2861 | 38% |
|  |  | P1 | 2990 | 45 | 150 | 51% | 2977 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3141 | 39 | 198 | 51% | 3133 | 42% |
|  |  | E1 | 3078 | 29 | 367 | 52% | 3067 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3078 | 42 | 168 | 53% | 3043 | 43% |
|  |  | E1 | 2934 | 32 | 310 | 47% | 2965 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2697 | 46 | 156 | 46% | 2734 | 31% |
|  |  | E1 | 2557 | 36 | 252 | 41% | 2651 | 33% |