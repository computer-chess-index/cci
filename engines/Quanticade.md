# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3344<sub>(+49) | 3514<sub>(+44) | 3546<sub>(+35) |  |
| 2.0 | 2025-05-21 | 3295 | 3470 | 3511 |  |
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

Generated: 2026-08-25 06:28:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3295, 3344]
  line "STC (8.0+0.08s)" [3295, 3344]
  line "LTC (60.0+0.60s)" [3470, 3514]
  line "VLTC (2m24s+1.12s)" [3511, 3546]
  line "VLTC (2m24s+1.12s)" [3511, 3546]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 22 | 476 | 51% | 3540 | 89% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 22 | 462 | 50% | 3513 | 87% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3344 | 20 | 642 | 50% | 3341 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 26 | 340 | 50% | 3507 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 26 | 352 | 50% | 3467 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3295 | 25 | 414 | 52% | 3282 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |