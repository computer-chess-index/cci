# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 2959<sub>(+410) | 3318<sub>(+317) | 3465<sub>(+326) |  |
| 2.0 | 2026-08-23 | 2549 | 3001 | 3139 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2026-10-09 | 3166<sub>(+393) | 3471<sub>(+267) | 3567<sub>(+204) |  |
| 2.0 | 2026-08-23 | 2773 | 3204 | 3363 |  |
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

Generated: 2026-10-22 04:42:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0"]
  y-axis "Elo Rating" 2500 --> 3600
  line "E1: STC (8.0+0.08s)" [2549, 2959]
  line "E1: LTC (60.0+0.60s)" [3001, 3318]
  line "E1: VLTC (2m24s+1.12s)" [3139, 3465]
  line "P1: STC (8.0+0.08s)" [2773, 3166]
  line "P1: LTC (60.0+0.60s)" [3204, 3471]
  line "P1: VLTC (2m24s+1.12s)" [3363, 3567]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3567 | 44 | 130 | 53% | 3545 | 69% |
|  |  | E1 | 3465 | 36 | 192 | 50% | 3459 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3471 | 29 | 310 | 57% | 3422 | 68% |
|  |  | E1 | 3318 | 32 | 260 | 55% | 3281 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3166 | 37 | 208 | 50% | 3155 | 57% |
|  |  | E1 | 2959 | 36 | 218 | 53% | 2932 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3363 | 37 | 204 | 49% | 3374 | 54% |
|  |  | E1 | 3139 | 30 | 302 | 44% | 3189 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3204 | 39 | 184 | 48% | 3217 | 52% |
|  |  | E1 | 3001 | 30 | 322 | 42% | 3063 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2773 | 37 | 216 | 48% | 2784 | 43% |
|  |  | E1 | 2549 | 35 | 298 | 39% | 2668 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |