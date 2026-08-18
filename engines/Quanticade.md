# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3339<sub>(+49) | 3509<sub>(+44) | 3541<sub>(+35) |  |
| 2.0 | 2025-05-21 | 3290 | 3465 | 3506 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quanticade+<version>&body=###%20Engine%20name%0AQuanticade%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:28:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3290, 3339]
  line "STC (8.0+0.08s)" [3290, 3339]
  line "LTC (60.0+0.60s)" [3465, 3509]
  line "VLTC (2m24s+1.12s)" [3506, 3541]
  line "VLTC (2m24s+1.12s)" [3506, 3541]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 22 | 464 | 51% | 3536 | 89% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 22 | 454 | 50% | 3509 | 87% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3339 | 20 | 638 | 50% | 3337 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 26 | 340 | 50% | 3503 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 26 | 352 | 50% | 3463 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3290 | 25 | 414 | 52% | 3278 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |