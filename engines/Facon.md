# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2368<sub>(+232) | 2611<sub>(+221) | 2742<sub>(+261) |  |
| 1.5 | 2026-05-26 | 2136<sub>(+142) | 2390<sub>(+107) | 2481<sub>(+137) |  |
| 1.4 | 2026-04-25 | 1994<sub>(+487) | 2283<sub>(+435) | 2344<sub>(+381) |  |
| 1.3 | 2026-04-11 | 1507<sub>(+new) | 1848<sub>(+new) | 1963<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
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

Generated: 2026-07-13 06:27:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1507, 1994, 2136, 2368]
  line "STC (8.0+0.08s)" [1507, 1994, 2136, 2368]
  line "LTC (60.0+0.60s)" [1848, 2283, 2390, 2611]
  line "VLTC (2m24s+1.12s)" [1963, 2344, 2481, 2742]
  line "VLTC (2m24s+1.12s)" [1963, 2344, 2481, 2742]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1507, 1994, 2136, 2368]
  line "STC (8.0+0.08s)" [1507, 1994, 2136, 2368]
  line "LTC (60.0+0.60s)" [1848, 2283, 2390, 2611]
  line "VLTC (2m24s+1.12s)" [1963, 2344, 2481, 2742]
  line "VLTC (2m24s+1.12s)" [1963, 2344, 2481, 2742]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 32 | 314 | 46% | 2770 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2611 | 34 | 280 | 51% | 2596 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2368 | 36 | 256 | 53% | 2341 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 38 | 242 | 48% | 2495 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2390 | 44 | 166 | 50% | 2392 | 36% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2136 | 43 | 190 | 51% | 2132 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2344 | 29 | 420 | 51% | 2331 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2283 | 31 | 380 | 53% | 2250 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1994 | 30 | 406 | 51% | 1975 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1963 | 34 | 324 | 48% | 1979 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1848 | 32 | 364 | 50% | 1845 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1507 | 31 | 378 | 50% | 1500 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |