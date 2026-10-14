# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2877<sub>(+404) | 3209<sub>(+288) | 3374<sub>(+318) |  |
| 2.0 | 2026-08-23 | 2473 | 2921 | 3056 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3179<sub>(+410) | 3394<sub>(+209) | 3544<sub>(+203) |  |
| 2.0 | 2026-08-23 | 2769 | 3185 | 3341 |  |
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

Generated: 2026-10-14 04:42:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2473, 2877]
  line "E1: LTC (60.0+0.60s)" [2921, 3209]
  line "E1: VLTC (2m24s+1.12s)" [3056, 3374]
  line "P1: STC (8.0+0.08s)" [2769, 3179]
  line "P1: LTC (60.0+0.60s)" [3185, 3394]
  line "P1: VLTC (2m24s+1.12s)" [3341, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3544 | 60 | 70 | 56% | 3498 | 70% |
|  |  | E1 | 3374 | 47 | 112 | 49% | 3368 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3394 | 60 | 74 | 61% | 3309 | 64% |
|  |  | E1 | 3209 | 46 | 130 | 55% | 3163 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3179 | 65 | 64 | 57% | 3105 | 61% |
|  |  | E1 | 2877 | 43 | 156 | 54% | 2843 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3341 | 37 | 204 | 49% | 3352 | 54% |
|  |  | E1 | 3056 | 30 | 302 | 44% | 3106 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3185 | 39 | 184 | 48% | 3198 | 52% |
|  |  | E1 | 2921 | 30 | 322 | 42% | 2985 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2769 | 37 | 216 | 48% | 2778 | 43% |
|  |  | E1 | 2473 | 35 | 298 | 39% | 2593 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |