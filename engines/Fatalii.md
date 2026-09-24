# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2283<sub>(+3) | 2519<sub>(-27) | 2608<sub>(-2) |  |
| 0.10.0 | 2026-03-09 | 2280 | 2546 | 2610 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fatalii+<version>&body=###%20Engine%20name%0AFatalii%0A%0A###%20Version%0A0.10.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:38:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2200 --> 2700
  line "" [2280, 2283]
  line "STC (8.0+0.08s)" [2280, 2283]
  line "LTC (60.0+0.60s)" [2546, 2519]
  line "" [2610, 2608]
  line "VLTC (2m24s+1.12s)" [2610, 2608]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.10.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2608 | 26 | 490 | 50% | 2607 | 27% |
| 0.10.1 | LTC <sub>(60.0+0.60s)</sub> | 2519 | 27 | 448 | 50% | 2522 | 31% |
| 0.10.1 | STC <sub>(8.0+0.08s)</sub> | 2283 | 28 | 438 | 49% | 2292 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2610 | 29 | 424 | 48% | 2634 | 25% |
| 0.10.0 | LTC <sub>(60.0+0.60s)</sub> | 2546 | 28 | 454 | 51% | 2542 | 25% |
| 0.10.0 | STC <sub>(8.0+0.08s)</sub> | 2280 | 27 | 464 | 52% | 2256 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |