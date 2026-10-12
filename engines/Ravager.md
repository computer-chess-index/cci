# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2867<sub>(+399) | 3194<sub>(+279) | 3375<sub>(+331) |  |
| 2.0 | 2026-08-23 | 2468 | 2915 | 3044 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3201<sub>(+409) | 3336<sub>(+136) | 3538<sub>(+189) |  |
| 2.0 | 2026-08-23 | 2792 | 3200 | 3349 |  |
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

Generated: 2026-10-12 04:41:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2468, 2867]
  line "E1: LTC (60.0+0.60s)" [2915, 3194]
  line "E1: VLTC (2m24s+1.12s)" [3044, 3375]
  line "P1: STC (8.0+0.08s)" [2792, 3201]
  line "P1: LTC (60.0+0.60s)" [3200, 3336]
  line "P1: VLTC (2m24s+1.12s)" [3349, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 81 | 38 | 59% | 3475 | 71% |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 60 | 72 | 50% | 3356 | 69% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3336 | 93 | 30 | 60% | 3267 | 60% |
| 3.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 62 | 74 | 58% | 3124 | 54% |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 3201 | 90 | 36 | 65% | 3052 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | STC <sub>(8.0+0.08s)</sub> | 2867 | 55 | 96 | 56% | 2812 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3220 | 31 | 274 | 50% | 3218 | 64% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3349 | 38 | 188 | 47% | 3374 | 55% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3044 | 31 | 280 | 42% | 3106 | 58% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3200 | 39 | 184 | 48% | 3213 | 52% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2915 | 30 | 322 | 42% | 2978 | 56% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3109 | 30 | 302 | 50% | 3109 | 57% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2792 | 38 | 204 | 49% | 2793 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2468 | 35 | 298 | 39% | 2587 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 35 | 256 | 49% | 2761 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |