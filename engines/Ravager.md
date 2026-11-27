# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3355<sub>(+415) | 3596<sub>(+297) | 3640<sub>(+206) |  |
| 3.3.0 | 2026-10-09 | 2940<sub>(+406) | 3299<sub>(+321) | 3434<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2534 | 2978 | 3113 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3387<sub>(+360) | 3588<sub>(+266) | 3600<sub>(+189) |  |
| 3.3.0 | 2026-10-09 | 3027<sub>(+361) | 3322<sub>(+260) | 3411<sub>(+202) |  |
| 2.0 | 2026-08-23 | 2666 | 3062 | 3209 |  |
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

Generated: 2026-11-27 05:42:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2534, 2940, 3355]
  line "E1: LTC (60.0+0.60s)" [2978, 3299, 3596]
  line "E1: VLTC (2m24s+1.12s)" [3113, 3434, 3640]
  line "P1: STC (8.0+0.08s)" [2666, 3027, 3387]
  line "P1: LTC (60.0+0.60s)" [3062, 3322, 3588]
  line "P1: VLTC (2m24s+1.12s)" [3209, 3411, 3600]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3640 | 28 | 294 | 48% | 3652 | 86% |
|  |  | P1 | 3600 | 39 | 160 | 55% | 3567 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3596 | 31 | 246 | 53% | 3573 | 80% |
|  |  | P1 | 3588 | 35 | 192 | 46% | 3610 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3387 | 37 | 180 | 53% | 3362 | 71% |
|  |  | E1 | 3355 | 26 | 406 | 54% | 3321 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3411 | 41 | 150 | 53% | 3391 | 71% |
|  |  | E1 | 3434 | 32 | 244 | 50% | 3432 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3322 | 27 | 346 | 57% | 3274 | 68% |
|  |  | E1 | 3299 | 27 | 340 | 54% | 3267 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3027 | 34 | 256 | 50% | 3011 | 53% |
|  |  | E1 | 2940 | 32 | 286 | 52% | 2925 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3113 | 30 | 302 | 44% | 3163 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3209 | 37 | 204 | 49% | 3220 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2978 | 30 | 322 | 42% | 3042 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3062 | 39 | 184 | 48% | 3075 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2666 | 37 | 216 | 48% | 2677 | 43% |
|  |  | E1 | 2534 | 35 | 298 | 39% | 2653 | 26% |