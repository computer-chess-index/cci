# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3070 | 3294 | 3337 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3305 | 3483 | 3524 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3141<sub>(-10) | 3356<sub>(+23) | 3407<sub>(+25) |  |
| 0219 | 2025-11-16 | 3151 | 3333 | 3382 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

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

Generated: 2026-10-12 04:44:22

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3500
  line "T1: STC (8.0+0.08s)" [3151, 3141]
  line "T1: LTC (60.0+0.60s)" [3333, 3356]
  line "T1: VLTC (2m24s+1.12s)" [3382, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 39 | 172 | 53% | 3472 | 70% |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3337 | 32 | 278 | 61% | 3171 | 62% |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 25 | 382 | 50% | 3409 | 81% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3294 | 36 | 210 | 58% | 3175 | 65% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 24 | 416 | 51% | 3347 | 74% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 42 | 152 | 56% | 3399 | 65% |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3070 | 33 | 248 | 48% | 3085 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3141 | 23 | 524 | 50% | 3140 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3305 | 39 | 178 | 49% | 3314 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | 3382 | 27 | 336 | 52% | 3357 | 79% |
| 0219 | LTC <sub>(60.0+0.60s)</sub> | 3333 | 25 | 406 | 49% | 3326 | 72% |
| 0219 | STC <sub>(8.0+0.08s)</sub> | 3151 | 24 | 490 | 53% | 3105 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |