# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3355<sub>(+415) | 3595<sub>(+298) | 3638<sub>(+206) |  |
| 3.3.0 | 2026-10-09 | 2940<sub>(+407) | 3297<sub>(+319) | 3432<sub>(+319) |  |
| 2.0 | 2026-08-23 | 2533 | 2978 | 3113 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3387<sub>(+359) | 3590<sub>(+268) | 3602<sub>(+191) |  |
| 3.3.0 | 2026-10-09 | 3028<sub>(+362) | 3322<sub>(+257) | 3411<sub>(+201) |  |
| 2.0 | 2026-08-23 | 2666 | 3065 | 3210 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:42:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2533, 2940, 3355]
  line "E1: LTC (60.0+0.60s)" [2978, 3297, 3595]
  line "E1: VLTC (2m24s+1.12s)" [3113, 3432, 3638]
  line "P1: STC (8.0+0.08s)" [2666, 3028, 3387]
  line "P1: LTC (60.0+0.60s)" [3065, 3322, 3590]
  line "P1: VLTC (2m24s+1.12s)" [3210, 3411, 3602]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3602 | 39 | 160 | 55% | 3568 | 81% |
|  |  | E1 | 3638 | 28 | 294 | 48% | 3650 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3590 | 35 | 196 | 46% | 3610 | 82% |
|  |  | E1 | 3595 | 31 | 246 | 53% | 3572 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3387 | 37 | 180 | 53% | 3362 | 71% |
|  |  | E1 | 3355 | 25 | 414 | 54% | 3320 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3432 | 31 | 252 | 50% | 3430 | 76% |
|  |  | P1 | 3411 | 41 | 150 | 53% | 3391 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3322 | 27 | 346 | 57% | 3275 | 68% |
|  |  | E1 | 3297 | 27 | 344 | 54% | 3267 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3028 | 34 | 256 | 50% | 3013 | 53% |
|  |  | E1 | 2940 | 32 | 290 | 52% | 2924 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3210 | 37 | 204 | 49% | 3221 | 54% |
|  |  | E1 | 3113 | 30 | 302 | 44% | 3163 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3065 | 39 | 184 | 48% | 3078 | 52% |
|  |  | E1 | 2978 | 30 | 322 | 42% | 3042 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2666 | 37 | 216 | 48% | 2677 | 43% |
|  |  | E1 | 2533 | 35 | 298 | 39% | 2651 | 26% |