# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3390<sub>(+46) | 3561<sub>(+44) | 3587<sub>(+28) |  |
| 2.0 | 2025-05-21 | 3344<sub>(+new) | 3517<sub>(+new) | 3559<sub>(+new) |  |
| 1.0 Fenrir | 2025-03-10 |  |  |  |  |
| 1.2 Chimera | 2025-01-06 |  |  |  |  |
| 1.1 Chimera | 2025-01-02 |  |  |  |  |
| 1.0 Chimera | 2025-01-01 |  |  |  |  |
| 0.9 Electra | 2024-10-26 |  |  |  |  |
| 0.8.1 Aurora | 2024-09-11 |  |  |  |  |
| 0.8 Aurora | 2024-08-23 |  |  |  |  |
| 0.7 | 2024-07-19 |  |  |  |  |
| 0.6b | 2024-07-09 |  |  |  |  |
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

Generated: 2026-05-06 06:27:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3344, 3390]
  line "STC (8.0+0.08s)" [3344, 3390]
  line "LTC (60.0+0.60s)" [3517, 3561]
  line "VLTC (2m24s+1.12s)" [3559, 3587]
  line "VLTC (2m24s+1.12s)" [3559, 3587]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3587 | 25 | 364 | 50% | 3586 | 90% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 25 | 378 | 50% | 3560 | 88% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3390 | 23 | 504 | 50% | 3390 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 26 | 340 | 50% | 3555 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 26 | 352 | 50% | 3514 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3344 | 25 | 414 | 52% | 3330 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |