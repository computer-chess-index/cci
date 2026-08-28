# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2156<sub>(+162) | 2422<sub>(+116) | 2489<sub>(+102) |  |
| 1.2.0 | 2026-02-01 | 1994<sub>(+192) | 2306<sub>(+276) | 2387<sub>(+235) |  |
| 1.1.0 | 2026-01-16 | 1802<sub>(+55) | 2030<sub>(+64) | 2152<sub>(+127) |  |
| 1.0.0 | 2026-01-02 | 1747 | 1966 | 2025 | Previously: chess-rs |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anodos+<version>&body=###%20Engine%20name%0AAnodos%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-28 06:22:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1747, 1802, 1994, 2156]
  line "STC (8.0+0.08s)" [1747, 1802, 1994, 2156]
  line "LTC (60.0+0.60s)" [1966, 2030, 2306, 2422]
  line "" [2025, 2152, 2387, 2489]
  line "VLTC (2m24s+1.12s)" [2025, 2152, 2387, 2489]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2489 | 27 | 482 | 49% | 2499 | 26% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2422 | 26 | 496 | 51% | 2418 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2156 | 24 | 588 | 49% | 2159 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2387 | 38 | 244 | 52% | 2367 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2306 | 41 | 196 | 49% | 2314 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1994 | 45 | 176 | 52% | 1978 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2152 | 37 | 256 | 51% | 2138 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2030 | 44 | 180 | 50% | 2028 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1802 | 40 | 228 | 50% | 1806 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2025 | 45 | 192 | 44% | 2122 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1966 | 49 | 156 | 48% | 1964 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1747 | 45 | 180 | 46% | 1797 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |