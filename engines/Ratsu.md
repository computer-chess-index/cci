# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-23 |  |  |  |  |
| 1.2.0 | 2026-05-07 | 1898<sub>(+174) | 2160<sub>(+157) | 2229<sub>(+141) |  |
| 1.1.0 | 2026-04-21 | 1724<sub>(+80) | 2003<sub>(+125) | 2088<sub>(+140) |  |
| 1.0.0 | 2026-02-20 | 1644<sub>(+102) | 1878<sub>(+77) | 1948<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1542 | 1801 | 1859 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:27:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1542, 1644, 1724, 1898]
  line "STC (8.0+0.08s)" [1542, 1644, 1724, 1898]
  line "LTC (60.0+0.60s)" [1801, 1878, 2003, 2160]
  line "VLTC (2m24s+1.12s)" [1859, 1948, 2088, 2229]
  line "VLTC (2m24s+1.12s)" [1859, 1948, 2088, 2229]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2229 | 31 | 348 | 51% | 2221 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2160 | 36 | 272 | 50% | 2148 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1898 | 32 | 344 | 52% | 1874 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2088 | 32 | 348 | 53% | 2061 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2003 | 33 | 326 | 51% | 1994 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1724 | 32 | 352 | 50% | 1710 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1948 | 29 | 390 | 50% | 1948 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1878 | 31 | 384 | 51% | 1871 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1644 | 30 | 394 | 48% | 1662 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1859 | 41 | 208 | 50% | 1864 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1801 | 36 | 280 | 53% | 1771 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1542 | 39 | 242 | 49% | 1550 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |