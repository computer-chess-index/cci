# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1940<sub>(+184) | 2248<sub>(+197) | 2267<sub>(+129) |  |
| 1.1.0 | 2026-04-21 | 1756<sub>(+85) | 2051<sub>(+134) | 2138<sub>(+147) |  |
| 1.0.0 | 2026-02-20 | 1671<sub>(+109) | 1917<sub>(+82) | 1991<sub>(+94) |  |
| 0.9.0 | 2026-01-21 | 1562 | 1835 | 1897 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-15 06:27:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1562, 1671, 1756, 1940]
  line "STC (8.0+0.08s)" [1562, 1671, 1756, 1940]
  line "LTC (60.0+0.60s)" [1835, 1917, 2051, 2248]
  line "VLTC (2m24s+1.12s)" [1897, 1991, 2138, 2267]
  line "VLTC (2m24s+1.12s)" [1897, 1991, 2138, 2267]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2267 | 36 | 254 | 48% | 2284 | 28% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2248 | 42 | 190 | 53% | 2225 | 29% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1940 | 39 | 228 | 52% | 1922 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2138 | 32 | 348 | 53% | 2113 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2051 | 33 | 326 | 51% | 2041 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1756 | 32 | 352 | 50% | 1743 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1991 | 29 | 390 | 50% | 1993 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1917 | 31 | 384 | 51% | 1910 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1671 | 30 | 394 | 48% | 1690 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1897 | 41 | 208 | 50% | 1902 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1835 | 36 | 280 | 53% | 1804 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1562 | 39 | 242 | 49% | 1570 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |