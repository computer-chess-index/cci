# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1959<sub>(+203) | 2241<sub>(+189) | 2269<sub>(+129) |  |
| 1.1.0 | 2026-04-21 | 1756<sub>(+83) | 2052<sub>(+134) | 2140<sub>(+147) |  |
| 1.0.0 | 2026-02-20 | 1673<sub>(+110) | 1918<sub>(+82) | 1993<sub>(+95) |  |
| 0.9.0 | 2026-01-21 | 1563 | 1836 | 1898 |  |
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

Generated: 2026-05-16 06:27:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1563, 1673, 1756, 1959]
  line "STC (8.0+0.08s)" [1563, 1673, 1756, 1959]
  line "LTC (60.0+0.60s)" [1836, 1918, 2052, 2241]
  line "VLTC (2m24s+1.12s)" [1898, 1993, 2140, 2269]
  line "VLTC (2m24s+1.12s)" [1898, 1993, 2140, 2269]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2269 | 35 | 270 | 49% | 2287 | 28% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2241 | 39 | 224 | 52% | 2225 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1959 | 36 | 268 | 53% | 1926 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2140 | 32 | 348 | 53% | 2114 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2052 | 33 | 326 | 51% | 2043 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1756 | 32 | 352 | 50% | 1744 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1993 | 29 | 390 | 50% | 1994 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1918 | 31 | 384 | 51% | 1912 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1673 | 30 | 394 | 48% | 1690 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1898 | 41 | 208 | 50% | 1904 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1836 | 36 | 280 | 53% | 1805 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1563 | 39 | 242 | 49% | 1571 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |