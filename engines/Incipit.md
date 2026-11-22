# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3465<sub>(+82) | 3623<sub>(+23) | 3667<sub>(+48) |  |
| 0.5.0 | 2026-10-17 | 3383 | 3600 | 3619 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3465<sub>(+66) | 3553<sub>(+39) | 3584<sub>(+42) |  |
| 0.5.0 | 2026-10-17 | 3399 | 3514 | 3542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3399 | 3514 | 3542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Incipit+<version>&body=###%20Engine%20name%0AIncipit%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:39:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3383, 3465]
  line "E1: LTC (60.0+0.60s)" [3600, 3623]
  line "E1: VLTC (2m24s+1.12s)" [3619, 3667]
  line "P1: STC (8.0+0.08s)" [3399, 3465]
  line "P1: LTC (60.0+0.60s)" [3514, 3553]
  line "P1: VLTC (2m24s+1.12s)" [3542, 3584]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3667 | 33 | 210 | 51% | 3660 | 90% |
|  |  | P1 | 3584 | 48 | 100 | 50% | 3586 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3623 | 34 | 198 | 52% | 3613 | 82% |
|  |  | P1 | 3553 | 43 | 124 | 52% | 3542 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3465 | 29 | 290 | 50% | 3463 | 72% |
|  |  | P1 | 3465 | 43 | 128 | 51% | 3457 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3542 | 36 | 212 | 62% | 3383 | 69% |
|  |  | E1 | 3619 | 33 | 246 | 59% | 3478 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3514 | 42 | 164 | 64% | 3256 | 69% |
|  |  | E1 | 3600 | 33 | 256 | 57% | 3422 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3399 | 38 | 204 | 60% | 3183 | 64% |
|  |  | E1 | 3383 | 31 | 304 | 57% | 3227 | 61% |