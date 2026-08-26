# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2861<sub>(+new) | 3136<sub>(+new) | 3233<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2272<sub>(+97) | 2611<sub>(+145) | 2754<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2175<sub>(+150) | 2466<sub>(+133) | 2604<sub>(+163) |  |
| 1.5.0 | 2026-03-04 | 2025<sub>(+254) | 2333<sub>(+247) | 2441<sub>(+236) |  |
| 1.4.0 | 2026-02-07 | 1771<sub>(+133) | 2086<sub>(+104) | 2205<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1638<sub>(-25) | 1982<sub>(+18) | 2078<sub>(+52) |  |
| 1.2.2 | 2026-01-23 | 1663 | 1964 | 2026 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:29:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1663, 1638, 1771, 2025, 2175, 2272, 2861]
  line "STC (8.0+0.08s)" [1663, 1638, 1771, 2025, 2175, 2272, 2861]
  line "LTC (60.0+0.60s)" [1964, 1982, 2086, 2333, 2466, 2611, 3136]
  line "VLTC (2m24s+1.12s)" [2026, 2078, 2205, 2441, 2604, 2754, 3233]
  line "VLTC (2m24s+1.12s)" [2026, 2078, 2205, 2441, 2604, 2754, 3233]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 27 | 372 | 50% | 3232 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 29 | 338 | 53% | 3104 | 54% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2861 | 26 | 434 | 51% | 2849 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2754 | 27 | 436 | 52% | 2736 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2611 | 31 | 328 | 49% | 2616 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2272 | 31 | 348 | 52% | 2255 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2604 | 34 | 280 | 50% | 2599 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2466 | 32 | 332 | 51% | 2456 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2175 | 35 | 288 | 49% | 2192 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2441 | 30 | 380 | 48% | 2460 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2333 | 37 | 252 | 52% | 2317 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2025 | 35 | 288 | 54% | 1985 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2205 | 36 | 264 | 49% | 2214 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2086 | 40 | 206 | 53% | 2064 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1771 | 43 | 180 | 51% | 1762 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2078 | 40 | 204 | 52% | 2063 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1982 | 46 | 164 | 51% | 1976 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1638 | 42 | 208 | 47% | 1663 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2026 | 38 | 260 | 46% | 2097 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1964 | 43 | 204 | 46% | 2028 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1663 | 41 | 232 | 47% | 1717 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |