# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1897<sub>(+170) | 2163<sub>(+157) | 2225<sub>(+135) |  |
| 1.1.0 | 2026-04-21 | 1727<sub>(+80) | 2006<sub>(+125) | 2090<sub>(+139) |  |
| 1.0.0 | 2026-02-20 | 1647<sub>(+103) | 1881<sub>(+76) | 1951<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1544 | 1805 | 1862 |  |
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

Generated: 2026-05-21 06:27:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1544, 1647, 1727, 1897]
  line "STC (8.0+0.08s)" [1544, 1647, 1727, 1897]
  line "LTC (60.0+0.60s)" [1805, 1881, 2006, 2163]
  line "VLTC (2m24s+1.12s)" [1862, 1951, 2090, 2225]
  line "VLTC (2m24s+1.12s)" [1862, 1951, 2090, 2225]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 32 | 344 | 50% | 2222 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2163 | 36 | 268 | 50% | 2149 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1897 | 33 | 336 | 51% | 1877 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2090 | 32 | 348 | 53% | 2064 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2006 | 33 | 326 | 51% | 1997 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1727 | 32 | 352 | 50% | 1715 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1951 | 29 | 390 | 50% | 1951 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1881 | 31 | 384 | 51% | 1874 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 30 | 394 | 48% | 1665 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 41 | 208 | 50% | 1867 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1805 | 36 | 280 | 53% | 1774 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1544 | 39 | 242 | 49% | 1553 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |