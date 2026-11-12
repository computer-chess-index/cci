# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3056<sub>(+544) | 3274<sub>(+506) | 3293<sub>(+569) |  |
| 2.1 | 2025-11-25 | 2512 | 2768 | 2724 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3197<sub>(+1034) | 3426<sub>(+637) | 3486<sub>(+867) |  |
| 2.1 | 2025-11-25 | 2163 | 2789 | 2619 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 911<sub>(-2055) | 2109<sub>(-1091) | 1223<sub>(-2040) |  |
| 2.1 | 2025-11-25 | 2966 | 3200 | 3263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:41:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 2100 --> 3500
  line "E1: STC (8.0+0.08s)" [2512, 3056]
  line "E1: LTC (60.0+0.60s)" [2768, 3274]
  line "E1: VLTC (2m24s+1.12s)" [2724, 3293]
  line "P1: STC (8.0+0.08s)" [2163, 3197]
  line "P1: LTC (60.0+0.60s)" [2789, 3426]
  line "P1: VLTC (2m24s+1.12s)" [2619, 3486]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 900 --> 3300
  line "T1: STC (8.0+0.08s)" [2966, 911]
  line "T1: LTC (60.0+0.60s)" [3200, 2109]
  line "T1: VLTC (2m24s+1.12s)" [3263, 1223]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1223 | 21 | 1660 | 25% | 1688 | 3% |
|  |  | P1 | 3486 | 30 | 334 | 56% | 3324 | 53% |
|  |  | E1 | 3293 | 25 | 506 | 52% | 3260 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2109 | 23 | 928 | 44% | 2203 | 2% |
|  |  | P1 | 3426 | 31 | 304 | 56% | 3362 | 53% |
|  |  | E1 | 3274 | 24 | 540 | 57% | 3167 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 911 | 34 | 472 | 55% | 941 | 15% |
|  |  | P1 | 3197 | 27 | 516 | 67% | 2695 | 40% |
|  |  | E1 | 3056 | 27 | 560 | 67% | 2510 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2619 | 246 | 4 | 13% | 2853 | 25% |
|  |  | E1 | 2724 | 211 | 4 | 25% | 2844 | 50% |
|  |  | T1 | 3263 | 22 | 564 | 54% | 3235 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2789 | 211 | 4 | 25% | 2909 | 50% |
|  |  | E1 | 2768 | 166 | 8 | 38% | 2847 | 50% |
|  |  | T1 | 3200 | 25 | 438 | 52% | 3181 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2163 | 246 | 8 | 100% | 1719 | 0% |
|  |  | E1 | 2512 | 262 | 4 | 0% | 2826 | 0% |
|  |  | T1 | 2966 | 23 | 552 | 50% | 2947 | 44% |