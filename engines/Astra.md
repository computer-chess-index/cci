# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3386<sub>(+110) | 3530<sub>(+60) | 3544<sub>(+37) |  |
| 6.1.1 | 2025-07-21 | 3276 | 3470 | 3507 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:22:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3276, 3386]
  line "STC (8.0+0.08s)" [3276, 3386]
  line "LTC (60.0+0.60s)" [3470, 3530]
  line "VLTC (2m24s+1.12s)" [3507, 3544]
  line "VLTC (2m24s+1.12s)" [3507, 3544]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 29 | 264 | 49% | 3552 | 89% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 30 | 258 | 50% | 3529 | 87% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3386 | 27 | 322 | 50% | 3386 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 23 | 420 | 52% | 3491 | 87% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 25 | 400 | 51% | 3457 | 81% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3276 | 23 | 514 | 51% | 3262 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |