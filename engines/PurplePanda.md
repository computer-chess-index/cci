# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1701<sub>(+55) | 1999<sub>(+89) | 2088<sub>(+106) |  |
| 20 | 2025-12-15 | 1646 | 1910 | 1982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PurplePanda+<version>&body=###%20Engine%20name%0APurplePanda%0A%0A###%20Version%0A21" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:28:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2100
  line "STC (8.0+0.08s)" [1646, 1701]
  line "STC (8.0+0.08s)" [1646, 1701]
  line "LTC (60.0+0.60s)" [1910, 1999]
  line "VLTC (2m24s+1.12s)" [1982, 2088]
  line "VLTC (2m24s+1.12s)" [1982, 2088]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2088 | 36 | 278 | 49% | 2098 | 17% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 1999 | 37 | 272 | 48% | 2030 | 19% |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1701 | 36 | 284 | 51% | 1696 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | 1982 | 25 | 566 | 48% | 2012 | 21% |
| 20 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 25 | 580 | 50% | 1916 | 17% |
| 20 | STC <sub>(8.0+0.08s)</sub> | 1646 | 25 | 640 | 47% | 1674 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |