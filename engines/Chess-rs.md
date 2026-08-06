# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1679<sub>(+10) | 1908<sub>(+57) | 2012<sub>(+40) |  |
| 0.6.0 | 2025-11-11 | 1669<sub>(+99) | 1851<sub>(+69) | 1972<sub>(+93) |  |
| 0.5.0 | 2025-11-03 | 1570 | 1782 | 1879 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess-rs+<version>&body=###%20Engine%20name%0AChess-rs%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 08:25:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1570, 1669, 1679]
  line "STC (8.0+0.08s)" [1570, 1669, 1679]
  line "LTC (60.0+0.60s)" [1782, 1851, 1908]
  line "VLTC (2m24s+1.12s)" [1879, 1972, 2012]
  line "VLTC (2m24s+1.12s)" [1879, 1972, 2012]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2012 | 25 | 588 | 48% | 2025 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1908 | 24 | 602 | 49% | 1918 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1679 | 24 | 666 | 49% | 1679 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1972 | 44 | 184 | 49% | 1982 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1851 | 50 | 146 | 50% | 1854 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1669 | 54 | 124 | 50% | 1667 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1879 | 49 | 148 | 49% | 1889 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1782 | 46 | 176 | 47% | 1817 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1570 | 49 | 156 | 47% | 1598 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |