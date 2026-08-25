# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2372<sub>(+227) | 2614<sub>(+224) | 2747<sub>(+251) |  |
| 1.5 | 2026-05-26 | 2145<sub>(+144) | 2390<sub>(+102) | 2496<sub>(+148) |  |
| 1.4 | 2026-04-25 | 2001<sub>(+488) | 2288<sub>(+434) | 2348<sub>(+380) |  |
| 1.3 | 2026-04-11 | 1513<sub>(+new) | 1854<sub>(+new) | 1968<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:25:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1513, 2001, 2145, 2372]
  line "STC (8.0+0.08s)" [1513, 2001, 2145, 2372]
  line "LTC (60.0+0.60s)" [1854, 2288, 2390, 2614]
  line "VLTC (2m24s+1.12s)" [1968, 2348, 2496, 2747]
  line "VLTC (2m24s+1.12s)" [1968, 2348, 2496, 2747]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2747 | 32 | 314 | 46% | 2774 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2614 | 34 | 280 | 51% | 2599 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2372 | 36 | 256 | 53% | 2345 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2496 | 33 | 318 | 49% | 2500 | 27% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2390 | 36 | 246 | 50% | 2390 | 33% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2145 | 33 | 318 | 52% | 2128 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2348 | 29 | 420 | 51% | 2336 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2288 | 31 | 380 | 53% | 2256 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2001 | 30 | 406 | 51% | 1983 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1968 | 34 | 324 | 48% | 1985 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1854 | 32 | 364 | 50% | 1851 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1513 | 31 | 378 | 50% | 1508 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |