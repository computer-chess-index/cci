# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3333<sub>(+48) | 3502<sub>(+42) | 3534<sub>(+33) |  |
| 2.0 | 2025-05-21 | 3285 | 3460 | 3501 |  |
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

Generated: 2026-08-12 08:07:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3285, 3333]
  line "STC (8.0+0.08s)" [3285, 3333]
  line "LTC (60.0+0.60s)" [3460, 3502]
  line "VLTC (2m24s+1.12s)" [3501, 3534]
  line "VLTC (2m24s+1.12s)" [3501, 3534]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 22 | 460 | 51% | 3529 | 89% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 22 | 454 | 50% | 3502 | 87% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3333 | 20 | 638 | 50% | 3330 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 26 | 340 | 50% | 3497 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 26 | 352 | 50% | 3456 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 25 | 414 | 52% | 3271 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |