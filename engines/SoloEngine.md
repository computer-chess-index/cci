# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2859<sub>(+new) | 3135<sub>(+new) | 3232<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2271<sub>(+97) | 2610<sub>(+145) | 2751<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2174<sub>(+150) | 2465<sub>(+134) | 2601<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2024<sub>(+254) | 2331<sub>(+247) | 2439<sub>(+236) |  |
| 1.4.0 | 2026-02-07 | 1770<sub>(+132) | 2084<sub>(+104) | 2203<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1638<sub>(-24) | 1980<sub>(+17) | 2076<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1662 | 1963 | 2025 |  |
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

Generated: 2026-08-24 06:29:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1662, 1638, 1770, 2024, 2174, 2271, 2859]
  line "STC (8.0+0.08s)" [1662, 1638, 1770, 2024, 2174, 2271, 2859]
  line "LTC (60.0+0.60s)" [1963, 1980, 2084, 2331, 2465, 2610, 3135]
  line "VLTC (2m24s+1.12s)" [2025, 2076, 2203, 2439, 2601, 2751, 3232]
  line "VLTC (2m24s+1.12s)" [2025, 2076, 2203, 2439, 2601, 2751, 3232]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3232 | 27 | 372 | 50% | 3231 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3135 | 29 | 338 | 53% | 3102 | 54% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2859 | 26 | 434 | 51% | 2847 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2751 | 27 | 436 | 52% | 2735 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2610 | 31 | 328 | 49% | 2615 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2271 | 31 | 348 | 52% | 2253 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2601 | 34 | 280 | 50% | 2597 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2465 | 32 | 332 | 51% | 2454 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2174 | 35 | 288 | 49% | 2190 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 30 | 380 | 48% | 2458 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2331 | 37 | 252 | 52% | 2315 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2024 | 35 | 288 | 54% | 1983 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 36 | 264 | 49% | 2211 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2084 | 40 | 206 | 53% | 2063 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1770 | 43 | 180 | 51% | 1760 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2076 | 40 | 204 | 52% | 2061 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1980 | 46 | 164 | 51% | 1975 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1638 | 42 | 208 | 47% | 1663 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2025 | 38 | 260 | 46% | 2095 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1963 | 43 | 204 | 46% | 2026 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1662 | 41 | 232 | 47% | 1717 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |