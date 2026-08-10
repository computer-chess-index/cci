# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.9 | 2026-08-04 | 1586<sub>(+139) | 1764<sub>(+178) | 1862<sub>(+214) |  |
| 0.3.8 | 2026-08-01 | 1447<sub>(+69) | 1586<sub>(-16) | 1648<sub>(0) |  |
| 0.3.7 | 2026-07-31 | 1378 | 1602 | 1648 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.3.9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 06:59:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9"]
  y-axis "Elo Rating" 1300 --> 1900
  line "STC (8.0+0.08s)" [1378, 1447, 1586]
  line "STC (8.0+0.08s)" [1378, 1447, 1586]
  line "LTC (60.0+0.60s)" [1602, 1586, 1764]
  line "VLTC (2m24s+1.12s)" [1648, 1648, 1862]
  line "VLTC (2m24s+1.12s)" [1648, 1648, 1862]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 34 | 314 | 55% | 1810 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1764 | 40 | 224 | 50% | 1758 | 17% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1586 | 35 | 286 | 52% | 1562 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1648 | 44 | 178 | 52% | 1631 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1586 | 54 | 120 | 50% | 1584 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1447 | 48 | 156 | 53% | 1416 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1648 | 39 | 246 | 47% | 1701 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1602 | 37 | 272 | 47% | 1652 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1378 | 37 | 290 | 43% | 1467 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |