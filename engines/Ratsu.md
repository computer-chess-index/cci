# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1899<sub>(+172) | 2161<sub>(+155) | 2218<sub>(+128) |  |
| 1.1.0 | 2026-04-21 | 1727<sub>(+81) | 2006<sub>(+125) | 2090<sub>(+141) |  |
| 1.0.0 | 2026-02-20 | 1646<sub>(+103) | 1881<sub>(+77) | 1949<sub>(+87) |  |
| 0.9.0 | 2026-01-21 | 1543 | 1804 | 1862 |  |
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

Generated: 2026-05-20 06:28:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1543, 1646, 1727, 1899]
  line "STC (8.0+0.08s)" [1543, 1646, 1727, 1899]
  line "LTC (60.0+0.60s)" [1804, 1881, 2006, 2161]
  line "VLTC (2m24s+1.12s)" [1862, 1949, 2090, 2218]
  line "VLTC (2m24s+1.12s)" [1862, 1949, 2090, 2218]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2218 | 32 | 332 | 50% | 2219 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2161 | 36 | 268 | 50% | 2148 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 33 | 328 | 52% | 1875 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2090 | 32 | 348 | 53% | 2063 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2006 | 33 | 326 | 51% | 1995 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1727 | 32 | 352 | 50% | 1713 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1949 | 29 | 390 | 50% | 1951 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1881 | 31 | 384 | 51% | 1874 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1646 | 30 | 394 | 48% | 1665 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 41 | 208 | 50% | 1866 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1804 | 36 | 280 | 53% | 1774 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1543 | 39 | 242 | 49% | 1553 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |