# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-21 | 1752<sub>(+81) | 2051<sub>(+135) | 2141<sub>(+151) |  |
| 1.0.0 | 2026-02-20 | 1671<sub>(+109) | 1916<sub>(+83) | 1990<sub>(+95) |  |
| 0.9.0 | 2026-01-21 | 1562 | 1833 | 1895 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-04 06:27:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1562, 1671, 1752]
  line "STC (8.0+0.08s)" [1562, 1671, 1752]
  line "LTC (60.0+0.60s)" [1833, 1916, 2051]
  line "VLTC (2m24s+1.12s)" [1895, 1990, 2141]
  line "VLTC (2m24s+1.12s)" [1895, 1990, 2141]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2141 | 33 | 320 | 53% | 2107 | 25% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2051 | 34 | 302 | 51% | 2044 | 21% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1752 | 33 | 332 | 50% | 1739 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1990 | 29 | 390 | 50% | 1991 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1916 | 31 | 384 | 51% | 1909 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1671 | 30 | 394 | 48% | 1689 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1895 | 41 | 208 | 50% | 1901 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1833 | 36 | 280 | 53% | 1804 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1562 | 39 | 242 | 49% | 1570 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |