# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.9 | 2026-08-04 | 1588<sub>(+135) | 1756<sub>(+166) | 1870<sub>(+218) |  |
| 0.3.8 | 2026-08-01 | 1453<sub>(+69) | 1590<sub>(-17) | 1652<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1384 | 1607 | 1651 |  |
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

Generated: 2026-08-18 06:22:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9"]
  y-axis "Elo Rating" 1300 --> 1900
  line "STC (8.0+0.08s)" [1384, 1453, 1588]
  line "STC (8.0+0.08s)" [1384, 1453, 1588]
  line "LTC (60.0+0.60s)" [1607, 1590, 1756]
  line "VLTC (2m24s+1.12s)" [1651, 1652, 1870]
  line "VLTC (2m24s+1.12s)" [1651, 1652, 1870]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1870 | 34 | 318 | 55% | 1816 | 19% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1756 | 40 | 228 | 50% | 1759 | 17% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1588 | 35 | 290 | 51% | 1567 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1652 | 44 | 178 | 52% | 1634 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1590 | 54 | 120 | 50% | 1588 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1453 | 48 | 156 | 53% | 1422 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1651 | 39 | 246 | 47% | 1705 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1607 | 37 | 272 | 47% | 1656 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1384 | 37 | 290 | 43% | 1473 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |