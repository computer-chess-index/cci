# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1948<sub>(+190) | 2244<sub>(+191) | 2277<sub>(+136) |  |
| 1.1.0 | 2026-04-21 | 1758<sub>(+84) | 2053<sub>(+133) | 2141<sub>(+147) |  |
| 1.0.0 | 2026-02-20 | 1674<sub>(+109) | 1920<sub>(+84) | 1994<sub>(+95) |  |
| 0.9.0 | 2026-01-21 | 1565 | 1836 | 1899 |  |
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

Generated: 2026-05-17 06:27:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1565, 1674, 1758, 1948]
  line "STC (8.0+0.08s)" [1565, 1674, 1758, 1948]
  line "LTC (60.0+0.60s)" [1836, 1920, 2053, 2244]
  line "VLTC (2m24s+1.12s)" [1899, 1994, 2141, 2277]
  line "VLTC (2m24s+1.12s)" [1899, 1994, 2141, 2277]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2277 | 34 | 286 | 49% | 2291 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2244 | 38 | 232 | 52% | 2229 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1948 | 34 | 296 | 52% | 1928 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2141 | 32 | 348 | 53% | 2114 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2053 | 33 | 326 | 51% | 2043 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1758 | 32 | 352 | 50% | 1744 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1994 | 29 | 390 | 50% | 1994 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1920 | 31 | 384 | 51% | 1913 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1674 | 30 | 394 | 48% | 1692 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1899 | 41 | 208 | 50% | 1904 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1836 | 36 | 280 | 53% | 1806 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1565 | 39 | 242 | 49% | 1573 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |