# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1690<sub>(+12) | 1916<sub>(+57) | 2017<sub>(+37) |  |
| 0.6.0 | 2025-11-11 | 1678<sub>(+98) | 1859<sub>(+68) | 1980<sub>(+93) |  |
| 0.5.0 | 2025-11-03 | 1580 | 1791 | 1887 |  |
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

Generated: 2026-08-24 06:23:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1580, 1678, 1690]
  line "STC (8.0+0.08s)" [1580, 1678, 1690]
  line "LTC (60.0+0.60s)" [1791, 1859, 1916]
  line "VLTC (2m24s+1.12s)" [1887, 1980, 2017]
  line "VLTC (2m24s+1.12s)" [1887, 1980, 2017]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2017 | 24 | 600 | 48% | 2033 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1916 | 24 | 614 | 49% | 1926 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1690 | 23 | 698 | 49% | 1689 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1980 | 44 | 184 | 49% | 1990 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1859 | 50 | 146 | 50% | 1862 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1678 | 54 | 124 | 50% | 1677 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1887 | 49 | 148 | 49% | 1897 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1791 | 46 | 176 | 47% | 1825 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1580 | 49 | 156 | 47% | 1608 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |