# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2888<sub>(+422) | 3193<sub>(+277) | 3413<sub>(+371) |  |
| 2.0 | 2026-08-23 | 2466 | 2916 | 3042 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3209<sub>(+404) | 3299<sub>(+90) | 3536<sub>(+176) |  |
| 2.0 | 2026-08-23 | 2805 | 3209 | 3360 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-11 17:20:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2466, 2888]
  line "E1: LTC (60.0+0.60s)" [2916, 3193]
  line "E1: VLTC (2m24s+1.12s)" [3042, 3413]
  line "P1: STC (8.0+0.08s)" [2805, 3209]
  line "P1: LTC (60.0+0.60s)" [3209, 3299]
  line "P1: VLTC (2m24s+1.12s)" [3360, 3536]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 105 | 22 | 64% | 3444 | 73% |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3413 | 77 | 44 | 59% | 3317 | 68% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3299 | 116 | 18 | 56% | 3263 | 67% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 66 | 66 | 59% | 3114 | 48% |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 3209 | 107 | 28 | 70% | 3020 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 2888 | 62 | 76 | 61% | 2793 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3220 | 31 | 274 | 50% | 3218 | 64% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3360 | 38 | 188 | 47% | 3384 | 55% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3042 | 31 | 280 | 42% | 3104 | 58% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 39 | 184 | 48% | 3222 | 52% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2916 | 30 | 318 | 42% | 2978 | 56% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3109 | 30 | 302 | 50% | 3109 | 57% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2805 | 39 | 196 | 50% | 2801 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2466 | 35 | 298 | 39% | 2587 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 35 | 256 | 49% | 2761 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |